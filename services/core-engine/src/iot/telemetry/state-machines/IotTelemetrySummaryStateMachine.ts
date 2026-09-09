export type IotTelemetrySummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetrySummaryStateMachine {
  private allowedTransitions: Record<IotTelemetrySummaryState, IotTelemetrySummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetrySummaryState, to: IotTelemetrySummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetrySummaryState, to: IotTelemetrySummaryState): IotTelemetrySummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetrySummary: " + from + " -> " + to);
    }
    return to;
  }
}
