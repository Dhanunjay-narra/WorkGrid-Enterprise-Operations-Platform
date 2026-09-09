export type AiRagPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagPayloadStateMachine {
  private allowedTransitions: Record<AiRagPayloadState, AiRagPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagPayloadState, to: AiRagPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagPayloadState, to: AiRagPayloadState): AiRagPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagPayload: " + from + " -> " + to);
    }
    return to;
  }
}
