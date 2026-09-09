export type WorkflowDagRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagRuleStateMachine {
  private allowedTransitions: Record<WorkflowDagRuleState, WorkflowDagRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagRuleState, to: WorkflowDagRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagRuleState, to: WorkflowDagRuleState): WorkflowDagRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagRule: " + from + " -> " + to);
    }
    return to;
  }
}
