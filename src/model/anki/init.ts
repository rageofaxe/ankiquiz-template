import { forward } from "effector";

import { easy, normal, hard, _next } from "./";

forward({
  from: [easy, normal, hard],
  to: _next,
});
