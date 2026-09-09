export type WorkflowDagQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagQueueStateMachine {
  private allowedTransitions: Record<WorkflowDagQueueState, WorkflowDagQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagQueueState, to: WorkflowDagQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagQueueState, to: WorkflowDagQueueState): WorkflowDagQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagQueue: " + from + " -> " + to);
    }
    return to;
  }
}
