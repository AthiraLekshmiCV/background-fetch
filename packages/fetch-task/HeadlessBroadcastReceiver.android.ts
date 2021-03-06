import HeadlessTask from "./headless-task";

declare var com: any;

let Fetch = com.transistorsoft.tsbackgroundfetch.BackgroundFetch;

@NativeClass()
@JavaProxy("com.transistorsoft.tsbackgroundfetch.HeadlessBroadcastReceiver")
class HeadlessBroadcastReceiver extends android.content.BroadcastReceiver {
  public onReceive(context:android.content.Context, intent:android.content.Intent) {
    let adapter = Fetch.getInstance(context);
    if (adapter.isMainActivityActive().booleanValue()) {
      return;
    }
    HeadlessTask.invokeHeadlessTask();
  }
}
