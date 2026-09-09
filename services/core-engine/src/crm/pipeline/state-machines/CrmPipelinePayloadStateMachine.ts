export type CrmPipelinePayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelinePayloadStateMachine {
  private allowedTransitions: Record<CrmPipelinePayloadState, CrmPipelinePayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelinePayloadState, to: CrmPipelinePayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelinePayloadState, to: CrmPipelinePayloadState): CrmPipelinePayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelinePayload: " + from + " -> " + to);
    }
    return to;
  }
}
