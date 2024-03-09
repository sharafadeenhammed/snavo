import recharge from "../assets/images/actions/recharge.png"
import withdraw from "../assets/images/actions/withdraw.png"
import team from "../assets/images/actions/team.png"
import task from "../assets/images/actions/task.png"
import routesName from "./routesName"
import invite from "../assets/images/actions/invite.png"
export default Object.freeze([
  {
    text: "Recharge",
    image: recharge,
    path:routesName.RECHARGE_METHOD
  }, {
    text: "Withdraw",
    image: withdraw,
    path:routesName.WITHDRAW_METHOD
  }, {
    text: "Team",
    image: team,
    path:routesName.MY_TEAM
  }, {
    text: "Task center",
    image: task,
    path:routesName.TASK_CENTER
  }, {
    text: "Invite",
    image: invite,
    path:routesName.INVITE_FRIENDS
  }
])