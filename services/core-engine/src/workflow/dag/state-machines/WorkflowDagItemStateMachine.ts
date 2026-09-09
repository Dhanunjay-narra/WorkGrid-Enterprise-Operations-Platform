export type WorkflowDagItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagItemStateMachine {
  private allowedTransitions: Record<WorkflowDagItemState, WorkflowDagItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagItemState, to: WorkflowDagItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagItemState, to: WorkflowDagItemState): WorkflowDagItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagItem: " + from + " -> " + to);
    }
    return to;
  }
}
