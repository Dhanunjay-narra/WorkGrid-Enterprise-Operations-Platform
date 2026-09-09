export type CrmPipelineEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineEntryStateMachine {
  private allowedTransitions: Record<CrmPipelineEntryState, CrmPipelineEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineEntryState, to: CrmPipelineEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineEntryState, to: CrmPipelineEntryState): CrmPipelineEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineEntry: " + from + " -> " + to);
    }
    return to;
  }
}
