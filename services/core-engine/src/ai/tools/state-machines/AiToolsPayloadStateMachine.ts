export type AiToolsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsPayloadStateMachine {
  private allowedTransitions: Record<AiToolsPayloadState, AiToolsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsPayloadState, to: AiToolsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsPayloadState, to: AiToolsPayloadState): AiToolsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
