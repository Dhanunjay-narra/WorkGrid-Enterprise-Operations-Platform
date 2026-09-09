export type AiMemorySessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemorySessionStateMachine {
  private allowedTransitions: Record<AiMemorySessionState, AiMemorySessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemorySessionState, to: AiMemorySessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemorySessionState, to: AiMemorySessionState): AiMemorySessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemorySession: " + from + " -> " + to);
    }
    return to;
  }
}
