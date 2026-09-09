export type WorkflowRetriesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowRetriesEventStateMachine {
  private allowedTransitions: Record<WorkflowRetriesEventState, WorkflowRetriesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowRetriesEventState, to: WorkflowRetriesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowRetriesEventState, to: WorkflowRetriesEventState): WorkflowRetriesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowRetriesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
