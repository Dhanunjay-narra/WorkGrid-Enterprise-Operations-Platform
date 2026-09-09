export type SupportSlaBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaBatchStateMachine {
  private allowedTransitions: Record<SupportSlaBatchState, SupportSlaBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaBatchState, to: SupportSlaBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaBatchState, to: SupportSlaBatchState): SupportSlaBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaBatch: " + from + " -> " + to);
    }
    return to;
  }
}
