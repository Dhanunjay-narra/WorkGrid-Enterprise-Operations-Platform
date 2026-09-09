export type ProjectEpicsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsProfileStateMachine {
  private allowedTransitions: Record<ProjectEpicsProfileState, ProjectEpicsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsProfileState, to: ProjectEpicsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsProfileState, to: ProjectEpicsProfileState): ProjectEpicsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
