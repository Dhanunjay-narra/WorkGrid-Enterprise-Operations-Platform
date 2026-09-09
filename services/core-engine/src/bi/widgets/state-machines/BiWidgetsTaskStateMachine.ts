export type BiWidgetsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsTaskStateMachine {
  private allowedTransitions: Record<BiWidgetsTaskState, BiWidgetsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsTaskState, to: BiWidgetsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsTaskState, to: BiWidgetsTaskState): BiWidgetsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsTask: " + from + " -> " + to);
    }
    return to;
  }
}
