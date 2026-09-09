export type CrmPipelineConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineConfigStateMachine {
  private allowedTransitions: Record<CrmPipelineConfigState, CrmPipelineConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineConfigState, to: CrmPipelineConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineConfigState, to: CrmPipelineConfigState): CrmPipelineConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineConfig: " + from + " -> " + to);
    }
    return to;
  }
}
