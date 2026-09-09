export type CrmPipelineThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineThresholdStateMachine {
  private allowedTransitions: Record<CrmPipelineThresholdState, CrmPipelineThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineThresholdState, to: CrmPipelineThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineThresholdState, to: CrmPipelineThresholdState): CrmPipelineThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
