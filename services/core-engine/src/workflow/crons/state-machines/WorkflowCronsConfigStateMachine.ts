export type WorkflowCronsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsConfigStateMachine {
  private allowedTransitions: Record<WorkflowCronsConfigState, WorkflowCronsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsConfigState, to: WorkflowCronsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsConfigState, to: WorkflowCronsConfigState): WorkflowCronsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
