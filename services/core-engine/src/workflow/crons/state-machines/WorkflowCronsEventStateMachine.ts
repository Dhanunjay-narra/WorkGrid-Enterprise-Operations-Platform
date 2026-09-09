export type WorkflowCronsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsEventStateMachine {
  private allowedTransitions: Record<WorkflowCronsEventState, WorkflowCronsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsEventState, to: WorkflowCronsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsEventState, to: WorkflowCronsEventState): WorkflowCronsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
