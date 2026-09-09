export type WorkflowDagStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagStateStateMachine {
  private allowedTransitions: Record<WorkflowDagStateState, WorkflowDagStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagStateState, to: WorkflowDagStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagStateState, to: WorkflowDagStateState): WorkflowDagStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagState: " + from + " -> " + to);
    }
    return to;
  }
}
