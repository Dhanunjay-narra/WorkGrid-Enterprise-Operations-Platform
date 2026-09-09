export type BiCohortsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsPayloadStateMachine {
  private allowedTransitions: Record<BiCohortsPayloadState, BiCohortsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsPayloadState, to: BiCohortsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsPayloadState, to: BiCohortsPayloadState): BiCohortsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
