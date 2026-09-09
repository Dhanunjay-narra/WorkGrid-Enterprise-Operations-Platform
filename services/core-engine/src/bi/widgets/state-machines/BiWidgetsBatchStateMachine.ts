export type BiWidgetsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsBatchStateMachine {
  private allowedTransitions: Record<BiWidgetsBatchState, BiWidgetsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsBatchState, to: BiWidgetsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsBatchState, to: BiWidgetsBatchState): BiWidgetsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
