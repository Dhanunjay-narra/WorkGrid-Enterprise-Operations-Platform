export type CrmPipelineEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineEventStateMachine {
  private allowedTransitions: Record<CrmPipelineEventState, CrmPipelineEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineEventState, to: CrmPipelineEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineEventState, to: CrmPipelineEventState): CrmPipelineEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineEvent: " + from + " -> " + to);
    }
    return to;
  }
}
