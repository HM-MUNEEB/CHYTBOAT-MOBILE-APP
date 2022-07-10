import { dbRT } from "../Config/firebase";
import { ref, set, update, push } from "firebase/database";
import { Timestamp } from "firebase/firestore";
import { uid } from "uid";

export function AddContact(currentUserName, targetUserName, setLoading) {
  //Add reference to the target user
  var taskCompleted = 0;
  const UUID = uid(32);
  try {
    const userRef = ref(dbRT, "users/" + targetUserName + "/data/friends");
    const locUserRef = push(userRef);
    set(locUserRef, {
      name: currentUserName,
      UUID,
    }).then(
      console.log(
        "USER ADDED AT: " + "users/" + targetUserName + "/data/friends"
      )
    );

    console.log(currentUserName + " : " + UUID);
    taskCompleted++;
    if (taskCompleted == 2) {
      setLoading(false);
    }
  } catch (e) {
    console.log("Error Adding to realtime DB:  ", e);
  }

  //Add reference to the Current user
  try {
    const userRef1 = ref(dbRT, "users/" + currentUserName + "/data/friends");
    const locUserRef1 = push(userRef1);
    set(locUserRef1, {
      name: targetUserName,
      UUID,
    }).then(
      console.log(
        "USER ADDED AT: " + "users/" + targetUserName + "/data/friends"
      )
    );

    console.log(currentUserName + " : " + UUID);
    taskCompleted++;
    if (taskCompleted == 2) {
      setLoading(false);
    }
  } catch (e) {
    console.log("Error Adding to realtime DB:  ", e);
  }
  chatStack(UUID);
}

//Initiated Chatstack at DBRT
function chatStack(UUID) {
  try {
    set(ref(dbRT, "chatStack/" + UUID), {
      channelCreatedOn: Timestamp.fromDate(new Date()),
    });
    console.log("CHANNEL CREATED AT: " + UUID);
  } catch (e) {
    console.log("Error Adding ChatStack to realtime DB:  ", e);
  }
}
