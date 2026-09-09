export type AiEvaluationsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsPayloadStateMachine {
  private allowedTransitions: Record<AiEvaluationsPayloadState, AiEvaluationsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsPayloadState, to: AiEvaluationsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsPayloadState, to: AiEvaluationsPayloadState): AiEvaluationsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
