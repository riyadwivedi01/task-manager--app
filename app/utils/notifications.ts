// // app/utils/notifications.ts
// import * as Notifications from 'expo-notifications';

// /**
//  * Request notification permissions from the user.
//  */
// export async function requestNotificationPermissions(): Promise<boolean> {
//   const { status } = await Notifications.requestPermissionsAsync();
//   if (status !== 'granted') {
//     alert('Please enable notifications to receive task reminders.');
//     return false;
//   }
//   return true;
// }

// /**
//  * Schedule a task reminder notification at a specific date/time.
//  * Works with latest Expo SDK (type: 'date').
//  *
//  * @param taskTitle - Title of the task
//  * @param taskId - Unique task ID
//  * @param date - Date object for reminder
//  */
// export async function scheduleTaskNotification(taskTitle: string, taskId: string, date: Date) {
//   const now = new Date();
//   if (date <= now) return; // Ignore past dates

//   try {
//     // 🔹 Use 'as any' to bypass TypeScript definition mismatch if SDK is older
//     await Notifications.scheduleNotificationAsync({
//       content: {
//         title: "Task Reminder ⏰",
//         body: taskTitle,
//         data: { taskId },
//       },
//       trigger: {
//         type: 'date',
//         value: date,
//       } as any,
//     });
//     console.log(`Notification scheduled for ${date.toLocaleString()}`);
//   } catch (error) {
//     console.error("Failed to schedule notification:", error);
//   }
// }
