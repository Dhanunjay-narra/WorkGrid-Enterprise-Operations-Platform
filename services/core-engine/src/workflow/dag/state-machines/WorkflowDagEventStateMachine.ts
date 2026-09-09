export type WorkflowDagEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagEventStateMachine {
  private allowedTransitions: Record<WorkflowDagEventState, WorkflowDagEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagEventState, to: WorkflowDagEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagEventState, to: WorkflowDagEventState): WorkflowDagEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagEvent: " + from + " -> " + to);
    }
    return to;
  }
}
