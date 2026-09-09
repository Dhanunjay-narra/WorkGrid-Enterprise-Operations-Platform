export type WorkflowNodesRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesRuleStateMachine {
  private allowedTransitions: Record<WorkflowNodesRuleState, WorkflowNodesRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesRuleState, to: WorkflowNodesRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesRuleState, to: WorkflowNodesRuleState): WorkflowNodesRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesRule: " + from + " -> " + to);
    }
    return to;
  }
}
