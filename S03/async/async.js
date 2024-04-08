// TASK

import { getUserListFromApi } from "./async.helpers.js";

const userList = await getUserListFromApi()
console.log(userList[0])