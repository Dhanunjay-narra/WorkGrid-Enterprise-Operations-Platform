export type BiWidgetsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsPayloadStateMachine {
  private allowedTransitions: Record<BiWidgetsPayloadState, BiWidgetsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsPayloadState, to: BiWidgetsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsPayloadState, to: BiWidgetsPayloadState): BiWidgetsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
