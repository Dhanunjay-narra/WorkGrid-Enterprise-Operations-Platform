export type CrmPipelineRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineRuleStateMachine {
  private allowedTransitions: Record<CrmPipelineRuleState, CrmPipelineRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineRuleState, to: CrmPipelineRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineRuleState, to: CrmPipelineRuleState): CrmPipelineRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineRule: " + from + " -> " + to);
    }
    return to;
  }
}
