export type IotThresholdsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsSessionStateMachine {
  private allowedTransitions: Record<IotThresholdsSessionState, IotThresholdsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsSessionState, to: IotThresholdsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsSessionState, to: IotThresholdsSessionState): IotThresholdsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsSession: " + from + " -> " + to);
    }
    return to;
  }
}
