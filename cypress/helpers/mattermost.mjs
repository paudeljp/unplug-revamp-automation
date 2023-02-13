import json_report from "../reports/mochareports/report.json" assert { type: "json" };

import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const text = `#### Test Results for ${
  process.env.PROJECT_NAME
} as of ${new Date()}\n@channel please review failed tests. \n\n| Test Cases Name  | Test Passed   | Test Failed  | Test Pending | Test Skipped | Test Duration |\n|:-----------|:-----------|:-----------|:-----------|:-----------|:-----------------|\n`;

const arr = [];

json_report.results.map((data) => {
  data.suites.map((dat) => {
    arr.push(
      `|${dat.title}| :white_check_mark: ${dat.passes.length} | :x:   ${
        dat.failures.length
      } | :pending: ${dat.pending.length} |:skip: ${
        dat.skipped.length
      }| :stopwatch: ${dat.duration / 1000} ms|\n`
    );
  });
});

const final_result = text + arr.join("");

const messageBody = {
  text: final_result,
};

let response = fetch(process.env.MATTERMOST_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json;",
  },
  body: JSON.stringify(messageBody),
});
