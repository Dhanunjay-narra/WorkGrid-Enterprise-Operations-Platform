export type BiKpisPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisPayloadStateMachine {
  private allowedTransitions: Record<BiKpisPayloadState, BiKpisPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisPayloadState, to: BiKpisPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisPayloadState, to: BiKpisPayloadState): BiKpisPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisPayload: " + from + " -> " + to);
    }
    return to;
  }
}
