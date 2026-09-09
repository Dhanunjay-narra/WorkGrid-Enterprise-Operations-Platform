export type WorkflowCronsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsRuleStateMachine {
  private allowedTransitions: Record<WorkflowCronsRuleState, WorkflowCronsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsRuleState, to: WorkflowCronsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsRuleState, to: WorkflowCronsRuleState): WorkflowCronsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsRule: " + from + " -> " + to);
    }
    return to;
  }
}
