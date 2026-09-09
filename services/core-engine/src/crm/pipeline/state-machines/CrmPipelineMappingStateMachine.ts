export type CrmPipelineMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineMappingStateMachine {
  private allowedTransitions: Record<CrmPipelineMappingState, CrmPipelineMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineMappingState, to: CrmPipelineMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineMappingState, to: CrmPipelineMappingState): CrmPipelineMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineMapping: " + from + " -> " + to);
    }
    return to;
  }
}
