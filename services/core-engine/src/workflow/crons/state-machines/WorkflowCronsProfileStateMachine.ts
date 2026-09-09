export type WorkflowCronsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsProfileStateMachine {
  private allowedTransitions: Record<WorkflowCronsProfileState, WorkflowCronsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsProfileState, to: WorkflowCronsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsProfileState, to: WorkflowCronsProfileState): WorkflowCronsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
