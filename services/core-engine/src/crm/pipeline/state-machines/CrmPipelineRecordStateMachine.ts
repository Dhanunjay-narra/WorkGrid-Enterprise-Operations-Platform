export type CrmPipelineRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineRecordStateMachine {
  private allowedTransitions: Record<CrmPipelineRecordState, CrmPipelineRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineRecordState, to: CrmPipelineRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineRecordState, to: CrmPipelineRecordState): CrmPipelineRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineRecord: " + from + " -> " + to);
    }
    return to;
  }
}
