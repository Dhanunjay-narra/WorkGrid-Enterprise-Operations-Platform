export type BiCohortsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsItemStateMachine {
  private allowedTransitions: Record<BiCohortsItemState, BiCohortsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsItemState, to: BiCohortsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsItemState, to: BiCohortsItemState): BiCohortsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsItem: " + from + " -> " + to);
    }
    return to;
  }
}
