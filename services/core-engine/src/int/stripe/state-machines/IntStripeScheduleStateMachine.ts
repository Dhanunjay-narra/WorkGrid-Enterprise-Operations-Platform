export type IntStripeScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeScheduleStateMachine {
  private allowedTransitions: Record<IntStripeScheduleState, IntStripeScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeScheduleState, to: IntStripeScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeScheduleState, to: IntStripeScheduleState): IntStripeScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
