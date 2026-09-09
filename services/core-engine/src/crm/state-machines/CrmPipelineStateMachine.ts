export type CrmPipelineState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmPipelineStateMachine {
  private validTransitions: Record<CrmPipelineState, CrmPipelineState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmPipelineState, next: CrmPipelineState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmPipelineState, next: CrmPipelineState): CrmPipelineState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmPipeline: from " + current + " to " + next);
    }
    return next;
  }
}
