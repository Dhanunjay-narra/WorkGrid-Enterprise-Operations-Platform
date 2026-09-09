export type AbacPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacPayloadStateMachine {
  private allowedTransitions: Record<AbacPayloadState, AbacPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacPayloadState, to: AbacPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacPayloadState, to: AbacPayloadState): AbacPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacPayload: " + from + " -> " + to);
    }
    return to;
  }
}
