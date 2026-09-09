export type CrmPipelineProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineProfileStateMachine {
  private allowedTransitions: Record<CrmPipelineProfileState, CrmPipelineProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineProfileState, to: CrmPipelineProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineProfileState, to: CrmPipelineProfileState): CrmPipelineProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineProfile: " + from + " -> " + to);
    }
    return to;
  }
}
