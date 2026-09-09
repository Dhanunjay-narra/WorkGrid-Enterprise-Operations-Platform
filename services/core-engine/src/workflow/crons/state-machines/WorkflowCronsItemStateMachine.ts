export type WorkflowCronsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsItemStateMachine {
  private allowedTransitions: Record<WorkflowCronsItemState, WorkflowCronsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsItemState, to: WorkflowCronsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsItemState, to: WorkflowCronsItemState): WorkflowCronsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsItem: " + from + " -> " + to);
    }
    return to;
  }
}
