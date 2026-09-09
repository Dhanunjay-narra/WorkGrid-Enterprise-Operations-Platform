export type WorkflowRetriesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowRetriesItemStateMachine {
  private allowedTransitions: Record<WorkflowRetriesItemState, WorkflowRetriesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowRetriesItemState, to: WorkflowRetriesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowRetriesItemState, to: WorkflowRetriesItemState): WorkflowRetriesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowRetriesItem: " + from + " -> " + to);
    }
    return to;
  }
}
