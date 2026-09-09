export type BiExportsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsEventStateMachine {
  private allowedTransitions: Record<BiExportsEventState, BiExportsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsEventState, to: BiExportsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsEventState, to: BiExportsEventState): BiExportsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
