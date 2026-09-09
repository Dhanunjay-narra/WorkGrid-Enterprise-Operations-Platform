export type AiPromptsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsPayloadStateMachine {
  private allowedTransitions: Record<AiPromptsPayloadState, AiPromptsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsPayloadState, to: AiPromptsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsPayloadState, to: AiPromptsPayloadState): AiPromptsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
