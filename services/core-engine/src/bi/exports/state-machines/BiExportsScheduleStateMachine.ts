export type BiExportsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsScheduleStateMachine {
  private allowedTransitions: Record<BiExportsScheduleState, BiExportsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsScheduleState, to: BiExportsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsScheduleState, to: BiExportsScheduleState): BiExportsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
