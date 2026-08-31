/**
 * Service worker của OneSignal — chỉ để NHẬN thông báo đẩy.
 *
 * Cố ý đặt trong thư mục con /chamcong/soloi/push/ chứ không để chung gốc: sw.js của
 * app đã chiếm phạm vi /chamcong/soloi/ rồi, hai service worker cùng một phạm vi thì
 * cái sau đá cái trước ra, và app sẽ mất tư cách "app cài được".
 */
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');
