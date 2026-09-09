export type CrmPipelineSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineSessionStateMachine {
  private allowedTransitions: Record<CrmPipelineSessionState, CrmPipelineSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineSessionState, to: CrmPipelineSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineSessionState, to: CrmPipelineSessionState): CrmPipelineSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineSession: " + from + " -> " + to);
    }
    return to;
  }
}
