export class WfWorkflowExecutionSubscriber {
  public static subscribeToStream(): void {
    console.log("[SUBSCRIBER] Listening to stream nexora.workflow.workflowexecution.events");
  }
}
