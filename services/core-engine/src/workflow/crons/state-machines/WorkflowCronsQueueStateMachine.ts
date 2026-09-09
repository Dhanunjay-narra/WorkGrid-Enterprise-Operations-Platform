export type WorkflowCronsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsQueueStateMachine {
  private allowedTransitions: Record<WorkflowCronsQueueState, WorkflowCronsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsQueueState, to: WorkflowCronsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsQueueState, to: WorkflowCronsQueueState): WorkflowCronsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
